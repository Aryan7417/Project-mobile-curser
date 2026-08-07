interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="mt-2 text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Header;