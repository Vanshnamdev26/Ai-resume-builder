import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";

//controller for enhancing a resume professional summary
export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.body;
        if(!userContent){
            return res.status(400).json({message: 'Missing required fields'})
        }
        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {   role: "system",
                    content: "You are an expert in resume writing. your task is to enhance the professional summary of a resume. The Summary should be 1-2 sentence also highlights key skills, experience and career objectives. Make it compelling and ATS-friendly. and nly return text no options or anything alse."
                },
                {
                    role: "user",
                    content: userContent,
                },
            ],
        })

        const enhancedContent = response.choices[0].message.content;
        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//controller for enhancing jon description

export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.body;
        if(!userContent){
            return res.status(400).json({message: 'Missing required fields'})
        }
        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {   role: "system",
                    content: "You are an expert in resume writing. your task is to enhance the Job Description of a resume. The Job Descriptio should be 1-2 sentence also highlights key responsibilties and achievements. Make it ATS-friendly. and nly return text no options or anything alse."
                },
                {
                    role: "user",
                    content: userContent,
                },
            ],
        })

        const enhancedContent = response.choices[0].message.content;
        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//controller for uploading resume to the database

export const uploadResume = async (req, res) => {
    try {
        const {resumeText, title} = req.body;
        const userId = req.userId;
        if(!resumeText){
            return res.status(400).json({message: 'Missing required field'})
        } 

        const systemPrompt = "You are an expert AI agent to extract data from resume."

        const userPrompt = `Extract data from this resume: ${resumeText} Provide data in the following JSON format with no additional text before or after:
        
            {professional_summary: {type: String, default: ''},
            skills: [{type: String}],
            personal_info: {
                image: {type: String, default: ''},
                full_name: {type: String, default: ''},
                profession: {type: String, default: ''},
                email: {type: String, default: ''},
                phone: {type: String, default: ''},
                location: {type: String, default: ''},
                linkedin: {type: String, default: ''},
                website: {type: String, default: ''},
            },

            experience: [{
                company: { type:String },
                position: { type:String },
                start_date: { type:String },
                end_date: { type:String },
                description: { type:String },
                is_current: { type:Boolean },
            }],

            projects: [{
                name: { type: String },
                type: { type:String },
                description: { type:String },
            }],

            education: [{
                institution: { type:String },
                degree: { type:String },
                field: { type:String },
                graduation_date: { type:String },
                gpa: { type:String },
            }]}`

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {   role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: userPrompt,
                },
            ],
        })

        const extractedData = response.choices[0].message.content;
        const parsedData = JSON.parse(extractedData)
        const newResume = await Resume.create({userId, title, ...parsedData})
        return res.json({resumeId: newResume._id})
    } catch (error) {
        // console.log("UPLOAD RESUME ERROR:", error)
        return res.status(400).json({ message: error.message })
    
    }
}

