import React, { useState, useRef, useCallback } from "react";
import { Input, InputProps } from "antd";

// Animation styles available for highlight effects
type HighlightStyle = "background" | "text" | "border" | "subtle" | "all";

interface HighlightInputProps extends InputProps {
  highlightOnChange?: boolean;
  animationDuration?: number;
  highlightStyle?: HighlightStyle | HighlightStyle[];
}

/**
 * Input component that highlights when its value changes
 * Extends Ant Design's Input with highlighting functionality
 */
const HighlightInput: React.FC<HighlightInputProps> = ({
  highlightOnChange = true,
  animationDuration = 1500,
  highlightStyle = "background",
  onChange,
  className = "",
  value,
  ...props
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const prevValueRef = useRef<string | number | readonly string[] | undefined>(
    value
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Call original onChange if provided
      if (onChange) {
        onChange(e);
      }

      // Apply highlight animation if value has changed
      if (highlightOnChange && e.target.value !== prevValueRef.current) {
        setIsHighlighted(true);

        // Store current value as previous for next comparison
        prevValueRef.current = e.target.value;

        // Remove highlight class after animation duration
        setTimeout(() => {
          setIsHighlighted(false);
        }, animationDuration);
      }
    },
    [onChange, highlightOnChange, animationDuration]
  );

  // Generate the appropriate class names based on highlightStyle
  const getHighlightClasses = (): string => {
    if (!isHighlighted) return "";

    // For 'all' option, apply all highlight classes
    if (highlightStyle === "all") {
      return "input-highlight text-highlight border-highlight subtle-highlight";
    }

    // For array of styles, apply each one
    if (Array.isArray(highlightStyle)) {
      return highlightStyle
        .map((style) => {
          switch (style) {
            case "background":
              return "input-highlight";
            case "text":
              return "text-highlight";
            case "border":
              return "border-highlight";
            case "subtle":
              return "subtle-highlight";
            default:
              return "";
          }
        })
        .join(" ");
    }

    // For single style
    switch (highlightStyle) {
      case "background":
        return "input-highlight";
      case "text":
        return "text-highlight";
      case "border":
        return "border-highlight";
      case "subtle":
        return "subtle-highlight";
      default:
        return "";
    }
  };

  // Apply the highlight classes if isHighlighted is true
  const combinedClassName = `${className} ${getHighlightClasses()}`;

  return (
    <Input
      {...props}
      className={combinedClassName}
      onChange={handleChange}
      value={value}
    />
  );
};

export default HighlightInput;
