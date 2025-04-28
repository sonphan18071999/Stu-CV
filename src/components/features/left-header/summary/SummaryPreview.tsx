import React, { useEffect, useRef, useState } from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import UserInformation from "../../../../models/UserInformation";
import "../../../../styles/summaryPreview.scss";

const SummaryPreview: React.FC = () => {
  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  // Track previous values to detect changes
  const prevValuesRef = useRef<UserInformation>({ ...userInformation });

  // Track if summary has changed to apply animations
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  // Check for changes when userInformation updates
  useEffect(() => {
    if (userInformation.summary !== prevValuesRef.current.summary) {
      // Update animated state
      setIsAnimated(true);

      // Store current values for next comparison
      prevValuesRef.current = { ...userInformation };

      // Reset animations after duration
      setTimeout(() => {
        setIsAnimated(false);
      }, 1500); // Match animation duration
    }
  }, [userInformation]);

  // Helper function to check if field is empty and should show placeholder
  const isSummaryEmpty = () => {
    return !userInformation.summary || userInformation.summary === "";
  };

  return (
    <div className="summary__preview p-4">
      <Card className="summary-card">
        <h3 className="text-lg font-bold mb-2">Professional Summary</h3>
        <p className={`summary-text ${isAnimated ? "text-highlight" : ""}`}>
          {isSummaryEmpty() ? (
            <span className="italic opacity-70">
              Your professional summary goes here...
            </span>
          ) : (
            userInformation.summary
          )}
        </p>
      </Card>
    </div>
  );
};

export default SummaryPreview;
