import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

/**
 * A reusable hook to detect changes and apply animations
 * @param data The data object to track changes in
 * @param options Configuration options
 * @returns State and utility functions for animations
 */
export function useAnimations<T extends Record<string, any>>(
  data: T,
  options: {
    duration?: number;
    skipFields?: Array<keyof T>;
  } = {}
) {
  const { duration = 1500, skipFields = [] } = options;

  // Track previous values
  const prevValuesRef = useRef<T>({ ...data });

  // Track which fields are animating
  const [animatedFields, setAnimatedFields] = useState<Record<string, boolean>>(
    {}
  );

  // Track if demo is playing
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  // Detect changes in data
  useEffect(() => {
    const changedFields: Record<string, boolean> = {};
    let hasChanges = false;

    // Compare current values with previous values
    (Object.keys(data) as Array<keyof T>).forEach((key) => {
      // Skip fields in the skipFields array
      if (skipFields.includes(key)) return;

      if (data[key] !== prevValuesRef.current[key]) {
        changedFields[key as string] = true;
        hasChanges = true;
      }
    });

    if (hasChanges) {
      // Update animated fields
      setAnimatedFields(changedFields);

      // Store current values for next comparison
      prevValuesRef.current = { ...data };

      // Reset animations after duration
      setTimeout(() => {
        setAnimatedFields({});
      }, duration);
    }
  }, [data, duration, skipFields]);

  // Function to demo all animations at once
  const demoAllAnimations = () => {
    if (isDemoPlaying) return;

    setIsDemoPlaying(true);

    const allFields: Record<string, boolean> = {};

    // Set all fields to animate
    (Object.keys(data) as Array<keyof T>).forEach((key) => {
      if (!skipFields.includes(key)) {
        allFields[key as string] = true;
      }
    });

    // Apply animations
    setAnimatedFields(allFields);

    // Reset after duration
    setTimeout(() => {
      setAnimatedFields({});
      setIsDemoPlaying(false);
    }, duration);
  };

  // Helper function to check if a field should be animated
  const getAnimationClass = (
    fieldName: keyof T,
    className: string = "text-highlight"
  ) => {
    return animatedFields[fieldName as string] ? className : "";
  };

  // Create a JSX element for the demo button
  const renderDemoButton = (labelText: string = "Demo Animations") => {
    return {
      type: "Button" as const,
      props: {
        type: "primary" as const,
        shape: "round" as const,
        icon: { type: "PlayCircleOutlined" },
        onClick: demoAllAnimations,
        className: "demo-button",
        disabled: isDemoPlaying,
        children: labelText,
      },
    };
  };

  return {
    animatedFields,
    isDemoPlaying,
    demoAllAnimations,
    getAnimationClass,
    renderDemoButton,
  };
}
