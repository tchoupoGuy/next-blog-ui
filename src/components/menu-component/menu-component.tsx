import styles from './menu-component.module.scss';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavRoutesType } from '../layout/layout.definitions';
import ActiveLink from '../active-link';

// I know it's ten, so just hardcode it for now
// in the ideal world we'd extract it from the styles
const rightGap = 10;

const getLastVisibleItem = ({
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

const getPrecalculatedWidths = (element: HTMLElement) => {
  const {
    width: containerWidth,
    left: containerLeft,
  } = element.getBoundingClientRect();
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

const MenuComponent = ({ items }: { items: NavRoutesType[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lastVisibleMenuItem, setLastVisibleMenuItem] = useState(-1);
  const [dimensions, setDimensions] = useState<{
    necessaryWidths: number[];
    moreWidth: number;
  }>({
    necessaryWidths: [],
    moreWidth: 0,
  });

  // calculate last visible element here
  useLayoutEffect(() => {
    if (!ref.current) return;
    const {
      moreWidth,
      necessaryWidths,
      containerWidth,
    } = getPrecalculatedWidths(ref.current);

    const itemIndex = getLastVisibleItem({
      containerWidth,
      necessaryWidths,
      moreWidth,
    });
    setDimensions({ moreWidth, necessaryWidths });
    setLastVisibleMenuItem(itemIndex);
  }, []);

  // listen for resize here and re-calculate the last visible element
  useLayoutEffect(() => {
    const listener = () => {
      if (!ref.current) return;
      const newIndex = getLastVisibleItem({
        containerWidth: ref.current.getBoundingClientRect().width,
        necessaryWidths: dimensions.necessaryWidths,
        moreWidth: dimensions.moreWidth,
      });

      if (newIndex !== lastVisibleMenuItem) setLastVisibleMenuItem(newIndex);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [lastVisibleMenuItem, dimensions, ref]);

  const moreButtonElement = (
    <button className={styles.navigationButton} id="more">
      ...
    </button>
  );

  const isMoreVisible = lastVisibleMenuItem < items.length - 1;
  const filteredItems = items.filter(
    (item, index) => index <= lastVisibleMenuItem
  );

  if (lastVisibleMenuItem === -1) {
    return (
      <div className={styles.navigation} ref={ref}>
        {items.map((nav: NavRoutesType) => {
          return (
            <ActiveLink id={nav.id} key={nav.path} href={nav.path}>
              {nav.name}
            </ActiveLink>
          );
        })}
        {moreButtonElement}
      </div>
    );
  }

  return (
    <div className={styles.navigation} ref={ref}>
      {filteredItems.map((item) => (
        <ActiveLink id={item.id} key={item.path} href={item.path}>
          {item.name}
        </ActiveLink>
      ))}
      {isMoreVisible && moreButtonElement}
    </div>
  );
};
export default MenuComponent;
