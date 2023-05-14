interface IProps {
  title: string;
  main: boolean;
}

const Title = ({ title, main }: IProps) => {
  return (
    <>
      {main ? (
        <h1 className="text-aurelion text-main_title w-title leading-10 tracking-title uppercase font-bold">
          {title}
        </h1>
      ) : (
        <h3 className="text-alabaster text-title w-fit uppercase tracking-wider">
          {title}
        </h3>
      )}
    </>
  );
};

export default Title;
