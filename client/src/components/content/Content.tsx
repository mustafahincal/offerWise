interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className="flex-1 bg-green-300 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Content;
