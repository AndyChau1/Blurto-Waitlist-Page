import React from 'react';

export interface PhoneScreenProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}