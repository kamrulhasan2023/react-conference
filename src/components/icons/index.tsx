import { IconNames } from './interface';
import { ErrorVector } from './sub-components/error';
import { NoDataVector } from './sub-components/no-data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

interface IIconStoreProps {
  iconName: IconNames;
}

/**
 * @method IconStore
 * @param {iconName} IIconStoreProps
 * @returns {JSX.Element}
 * @description this function will receive iconName and return icon JSX.Element(svg)
 */

const IconStore = ({ iconName }: IIconStoreProps) => {
  switch (iconName) {
    case 'Error Vector': {
      return <ErrorVector />;
    }
    case 'No Data Vector': {
      return <NoDataVector />;
    }
    case 'Arrow Left': {
      return <FaArrowLeft />;
    }
    case 'Arrow Right': {
      return <FaArrowRight />;
    }
    case 'Chevron Left': {
      return <FaArrowLeft />;
    }
    case 'Chevron Right': {
      return <FaArrowRight />;
    }
    case 'Error': {
      return <BiError />;
    }
    default:
      /**
       * If you see an error here, it means you have
       * updated the `IconNames` type but you have not updated this switch case
       */
      const unreachable: never = iconName;
      throw `Unregistered Icon: ${unreachable}`;
  }
};

export default IconStore;
