"use client";

import React, { useState } from "react";
import { Flag, X } from "lucide-react";

const ReportModal = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");

  const reportReasons = [
    "Spam or misleading content",
    "Inappropriate or offensive content",
    "Copyright violation",
    "False recipe information",
  ];

  const handleReport = () => {
    console.log({
      recipeId: recipe?._id,
      recipeTitle: recipe?.title,
      reason,
    });

    setReason("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Report Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-sm font-medium text-white"
      >
        <Flag size={16} />
        Report
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl">
            
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Report Recipe
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Select a reason for reporting this recipe.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X
                  size={18}
                  className="text-slate-600 dark:text-slate-300"
                />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
              {reportReasons.map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    reason === item
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="reportReason"
                    value={item}
                    checked={reason === item}
                    onChange={(e) => setReason(e.target.value)}
                    className="accent-red-500"
                  />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </label>
              ))}
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-5 pt-0">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleReport}
                disabled={!reason}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportModal;