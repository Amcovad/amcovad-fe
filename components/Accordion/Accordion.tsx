import React, { useState } from "react";
import classNames from "classnames";
import { ArrowRight2 } from "iconsax-react";

type optionProps = {
  title: string;
  content: string;
};
const AccordionLayout = ({ options }: any) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      {options.map(({ title, content }: optionProps, index: any) => (
        <div
          key={title}
          className="overflow-hidden flex w-full flex-col my-3 border-2 rounded-md border-secondary-300 hover:border-primary-300"
        >
          <div
            onClick={() => setIsActive(isActive === index ? null : index)}
            className="flex items-center p-5 lg:p-6 justify-between  cursor-pointer bg-secondary-25 hover:bg-white "
          >
            <div className="flex items-center gap-4 text-secondary-600 font-bold">
              <span>
                {isActive === index ? (
                  <ArrowRight2
                    size="16"
                    className="rotate-90"
                    variant="Bold"
                    color="#01A1DF"
                  />
                ) : (
                  <ArrowRight2 size="16" color="#5D6677" />
                )}
              </span>
              <p
                className={classNames(" font-bold text-sm md:text-base", {
                  "text-primary-500": isActive === index,
                })}
              >
                {title}
              </p>
            </div>
          </div>
          {index === isActive && (
            <div className=" w-full leading-6 text-secondary-600  transition-height ease duration-500 p-4 px-10 mb-6">
              {content}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default AccordionLayout;
