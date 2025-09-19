import React, { ReactNode } from 'react';

// SkipLink Component - Accessibility component for keyboard navigation
interface SkipLinkProps {
  href?: string;
  children?: ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ 
  href = "#main-content", 
  children = "Skip to main content" 
}) => (
  <a 
    href={href} 
    className="absolute left-[-9999px] focus:left-2 focus:top-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-yellow-400 text-black p-2 rounded transition-all"
  >
    {children}
  </a>
);

// ReferenceBox Component - Dynamic container for references
interface ReferenceBoxProps {
  className?: string;
  children?: ReactNode;
  variant?: "default" | "light" | "dark";
}

const ReferenceBox: React.FC<ReferenceBoxProps> = ({ 
  className = "", 
  children = "Click a Pulmonology link above to load reference details here.",
  variant = "default"
}) => {
  const baseClasses = "reference-box mt-6 p-4 border-2 border-yellow-400 rounded";
  const variantClasses: Record<string, string> = {
    default: "bg-gray-900 text-white",
    light: "bg-gray-100 text-gray-800",
    dark: "bg-black text-white"
  };

  return (
    <section 
      role="note" 
      aria-label="Reference Section"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {typeof children === "string" ? (
        <p className="text-gray-300">{children}</p>
      ) : (
        children
      )}
    </section>
  );
};

// Demo component showing both utilities in action
const UtilityDemo: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Skip Link - positioned absolutely at top */}
      <SkipLink />
      
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">
            Utility Components Demo
          </h1>
          <p className="text-gray-300">
            Tab to see the SkipLink appear, and scroll down to see the ReferenceBox
          </p>
        </header>

        <main id="main-content" className="space-y-8">
          <section className="bg-red-950 p-6 rounded-lg border-2 border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              SkipLink Component Features:
            </h2>
            <ul className="space-y-2 text-gray-200">
              <li>• Hidden by default (positioned off-screen)</li>
              <li>• Appears when focused via keyboard navigation</li>
              <li>• Customizable href and text content</li>
              <li>• Follows WCAG accessibility guidelines</li>
              <li>• Matches your existing styling exactly</li>
            </ul>
          </section>

          <section className="bg-red-950 p-6 rounded-lg border-2 border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              ReferenceBox Variations:
            </h2>
            
            {/* Default ReferenceBox */}
            <div className="mb-6">
              <h3 className="text-lg text-yellow-300 mb-2">Default (matches your original):</h3>
              <ReferenceBox />
            </div>

            {/* Custom content ReferenceBox */}
            <div className="mb-6">
              <h3 className="text-lg text-yellow-300 mb-2">With custom content:</h3>
              <ReferenceBox>
                <div className="space-y-2">
                  <h4 className="text-yellow-400 font-semibold">Harrison's Principles of Internal Medicine</h4>
                  <p className="text-gray-300">21st Edition, Chapter 123: Pulmonary Diseases</p>
                  <p className="text-sm text-gray-400">Reference loaded dynamically...</p>
                </div>
              </ReferenceBox>
            </div>

            {/* Light variant ReferenceBox */}
            <div className="mb-6">
              <h3 className="text-lg text-yellow-300 mb-2">Light variant:</h3>
              <ReferenceBox variant="light">
                <p className="text-gray-600">Light theme reference box</p>
              </ReferenceBox>
            </div>
          </section>

          <section className="bg-red-950 p-6 rounded-lg border-2 border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Component Usage:
            </h2>
            <div className="bg-gray-800 p-4 rounded text-sm text-green-400 font-mono">
              <div className="mb-4">
                <div className="text-yellow-300">// SkipLink usage:</div>
                <div>&lt;SkipLink /&gt;</div>
                <div>&lt;SkipLink href="#content" children="Skip to content" /&gt;</div>
              </div>
              <div>
                <div className="text-yellow-300">// ReferenceBox usage:</div>
                <div>&lt;ReferenceBox /&gt;</div>
                <div>&lt;ReferenceBox variant="light"&gt;Custom content&lt;/ReferenceBox&gt;</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UtilityDemo;
export { SkipLink, ReferenceBox };
