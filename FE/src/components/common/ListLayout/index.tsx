import * as S from "@/components/common/ListLayout/style";

export type ListLayoutProps = {
  width: number;
  titleComponent?: JSX.Element;
  listComponents?: JSX.Element[];
};

const ListLayout = ({ width, titleComponent, listComponents }: ListLayoutProps) => {
  return (
    <S.ListLayout width={width}>
      {titleComponent}
      {listComponents}
    </S.ListLayout>
  );
};

export default ListLayout;
