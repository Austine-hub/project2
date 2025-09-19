const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-red-900 text-yellow-400 py-4 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {currentYear} AjanjaCare Pharmaceuticals AFRICA. All rights reserved.</p>
        {/* Optional future links */}
        {/* 
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-2 text-sm">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
