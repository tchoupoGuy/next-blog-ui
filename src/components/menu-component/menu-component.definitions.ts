// I know it's ten, so just hardcode it for now
// in the ideal world we'd extract it from the styles
const rightGap = 10;

export const getLastVisibleItem = ({
  necessaryWidths,
  containerWidth,
  moreWidth,
}: {
  necessaryWidths: number[];
  containerWidth: number;
  moreWidth: number;
}) => {
  if (!necessaryWidths?.length) return 0;
  // if the last width is less than the container width
  // then we're good - everything will fit
  if (necessaryWidths[necessaryWidths.length - 1] < containerWidth)
    return necessaryWidths.length - 1;

  const visibleItems = necessaryWidths.filter((width) => {
    return width + moreWidth < containerWidth;
  });

  return visibleItems.length ? visibleItems.length - 1 : 0;
};

export const getPrecalculatedWidths = (element: HTMLElement) => {
  const { width: containerWidth, left: containerLeft } =
    element.getBoundingClientRect();
  const children = Array.from(element.childNodes) as HTMLElement[];

  let moreWidth = 0;
  const necessaryWidths = children.reduce<number[]>((result, node) => {
    // extract "more" button width and skip the calculations
    if (node.getAttribute('id') === 'more') {
      moreWidth = node.getBoundingClientRect().width;
      return result;
    }

    const rect = node.getBoundingClientRect();
    const width = rect.width + (rect.left - containerLeft) + rightGap;

    return [...result, width];
  }, []);

  return {
    moreWidth,
    necessaryWidths,
    containerWidth,
  };
};
