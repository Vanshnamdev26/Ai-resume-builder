import { Check, Palette } from 'lucide-react';
import React, { useState } from 'react';

const ColorPicker = ({ selectedColor, onChange }) => {

  const colors = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Dark Blue", value: "#1D4ED8" },
    { name: "Light Blue", value: "#60A5FA" },

    { name: "Indigo", value: "#6366F1" },
    { name: "Dark Indigo", value: "#4338CA" },
    { name: "Light Indigo", value: "#818CF8" },

    { name: "Purple", value: "#A855F7" },
    { name: "Dark Purple", value: "#7E22CE" },
    { name: "Light Purple", value: "#C084FC" },

    { name: "Green", value: "#22C55E" },
    { name: "Dark Green", value: "#15803D" },
    { name: "Light Green", value: "#4ADE80" },

    { name: "Red", value: "#EF4444" },
    { name: "Dark Red", value: "#B91C1C" },
    { name: "Light Red", value: "#F87171" },

    { name: "Orange", value: "#F97316" },
    { name: "Dark Orange", value: "#C2410C" },
    { name: "Light Orange", value: "#FB923C" },

    { name: "Teal", value: "#14B8A6" },
    { name: "Dark Teal", value: "#0F766E" },
    { name: "Light Teal", value: "#2DD4BF" },

    { name: "Pink", value: "#EC4899" },
    { name: "Dark Pink", value: "#BE185D" },
    { name: "Light Pink", value: "#F472B6" },

    { name: "Gray", value: "#6B7280" },
    { name: "Dark Gray", value: "#374151" },
    { name: "Light Gray", value: "#9CA3AF" },

    { name: "Black", value: "#000000" }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div className="grid grid-cols-4 w-60 gap-3 absolute top-full left-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm">

          {colors.map((item) => (

            <div
              key={item.value}
              className="relative cursor-pointer group flex flex-col items-center"
              onClick={() => {
                console.log("Clicked color:", item.name);
                onChange(item.value);
                setIsOpen(false);
              }}
            >

              <div
                className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-black/25"
                style={{
                  backgroundColor: item.value
                }}
              >
                {selectedColor === item.value && (
                  <div className="w-full h-full flex items-center justify-center">
                    <Check className="size-5 text-white" />
                  </div>
                )}
              </div>

              <p className="text-xs text-center mt-1 text-gray-600">
                {item.name}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default ColorPicker;