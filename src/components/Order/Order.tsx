import { useState } from "react";

// Styles
import "./OrderStyle.scss";

// Hooks
import useOutsideClick from "../../hooks/useOutsideClick";
// icons
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

const selectedList = [
  {
    title: "Lowest Number First",
    id: 0,
    option: "lowest",
  },
  {
    title: "Highest Number First",
    id: 1,
    option: "higher",
  },
  {
    title: "Alphabetically (A-Z)",
    id: 2,
    option: "AZ",
  },
  {
    title: "Alphabetically (Z-A)",
    id: 3,
    option: "ZA",
  },
];

// Redux
import { useDispatch } from "react-redux";
import { changeSort } from "../../store/slices/sortSlice";

const Order = () => {
  const [selected, setSelected] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const handleOrder = (itemId: number) => {
    setSelected(itemId);
    setIsOpen(false);
    const currentObject = selectedList.find((item) => item.id === itemId);
    if (currentObject) {
      dispatch(changeSort(currentObject.option));
    }
  };

  return (
    <div className="order" ref={ref}>
      <div className="order-main" onClick={() => setIsOpen((prev) => !prev)}>
        <p>{selectedList[selected].title}</p>
        <div className="order-main-icon-wrapper">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {isOpen ? (
        <div className="order-select">
          {selectedList?.map((item) => {
            const itemTitle = item.title;
            const isSelected = selected === item.id;
            const itemId = item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleOrder(itemId)}
                className={`order-select-wrapper ${
                  isSelected ? "activeSelected" : ""
                }`}
              >
                <p>{itemTitle}</p>
                {isSelected ? (
                  <div>
                    <IoMdCheckmark />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Order;
