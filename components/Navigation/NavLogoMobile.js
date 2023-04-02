import AgenoneMobile from "../img/AgenoneMobile";

export default function NavLogo() {
  return (
    <div className="flex items-center space-x-2">
      <AgenoneMobile />
      <span className="text-xl italic font-bold text-white">Agenone</span>
    </div>
  );
}
