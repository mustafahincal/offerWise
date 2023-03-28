const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4 px-14 bg-crimson text-white  border-gray-300 text-sm">
      <div className="flex flex-row justify-between gap-3">
        <p>Official links</p>
        <p>Terms and Conditions</p>
        <p>Advertising Policy</p>
        <p>Guide for Government Agencies</p>
        <p>Privacy Statement</p>
      </div>
      <div>
        <p>
          © 2022 - 2023 <span className="ml-1 font-bold">Karaca</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
