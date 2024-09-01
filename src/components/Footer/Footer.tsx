const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 py-4 text-slate-200">
      <h5 className="text-center font-thin">©{year} Synergy2Devs - Todos los derechos reservados </h5>
    </footer>
  );
};

export default Footer;
