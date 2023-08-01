/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import { getColor } from "@/utils/helper-functions";

type CustomSelectType = {
  //   selected: any;
  //   setSelected: any;
  name: string;
  data: any;
};

const removeDuplicates = (array: any[]) => {
  const uniqueObjects = array.filter(
    (object, index, self) =>
      index === self.findIndex((o) => o?.id === object?.id)
  );
  return uniqueObjects;
};

export default function MultiCustomSelect({
  //   selected,
  //   setSelected,
  name,
  data,
}: CustomSelectType) {
  const [selected, setSelected] = useState([data[0]]);

  const { register, setValue } = useFormContext(); // retrieve all hook methods

  useEffect(() => {
    setValue(name, [...removeDuplicates(selected).map((item) => item?.id)], {
      shouldValidate: true,
    });
  }, [setValue, selected]);

  return (
    <div className="-mt-1">
      <Listbox value={selected} onChange={setSelected} multiple>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-base font-Inter font-normal leading-6 text-secondary-800 pb-1">
              Select Witnesses
            </Listbox.Label>
            <div className="relative ">
              <Listbox.Button className="relative w-full flex gap-2 flex-wrap cursor-default rounded-md bg-neutral-white py-3 pl-3 pr-10 text-left text-secondary-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-primary-200 focus:ring-primary-200 focus:shadow-primary-sm sm:text-sm sm:leading-6">
                {removeDuplicates(selected).map((person) => (
                  <div key={person.id}>
                    <span className="flex items-center">
                      {person?.avatar ? (
                        <img
                          src={
                            person?.avatar || "/assets/dashboard/user/user1.jpg"
                          }
                          alt=""
                          className="h-8 w-8 flex-shrink-0 rounded-full"
                        />
                      ) : (
                        <span
                          className={classNames(
                            "font-migra text-[#060809] text-xs font-bold w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                            getColor(person?.firstName)
                          )}
                        >
                          {person ? (
                            <>
                              {person?.firstName?.slice(0, 1).toUpperCase() +
                                person?.lastName?.slice(0, 1).toUpperCase()}
                            </>
                          ) : null}
                        </span>
                      )}
                      <span className="ml-3 block truncate text-base">
                        {person
                          ? person?.firstName +
                            " " +
                            person?.lastName +
                            " (" +
                            person?.relationship +
                            ") "
                          : ""}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                ))}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-neutral-white py-1 text-base shadow-lg ring-1 ring-neutral-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((person: any) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "bg-primary-400 text-neutral-white"
                            : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {person?.avatar ? (
                              <img
                                src={
                                  person?.avatar ||
                                  "/assets/dashboard/user/user1.jpg"
                                }
                                alt=""
                                className="h-8 w-8 flex-shrink-0 rounded-full"
                              />
                            ) : (
                              <span
                                className={classNames(
                                  "font-migra text-[#060809] text-xs font-bold w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FAEAD4]",
                                  getColor(person?.firstName)
                                )}
                              >
                                {person ? (
                                  <>
                                    {person?.firstName
                                      ?.slice(0, 1)
                                      .toUpperCase() +
                                      person?.lastName
                                        ?.slice(0, 1)
                                        .toUpperCase()}
                                  </>
                                ) : null}
                              </span>
                            )}
                            {/* <img
                              src={
                                person.avatar ||
                                "/assets/dashboard/user/user1.jpg"
                              }
                              alt="user avatar"
                              className="h-8 w-8 flex-shrink-0 rounded-full"
                            /> */}
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal ",
                                "ml-3 block truncate"
                              )}
                            >
                              {person
                                ? person?.firstName +
                                  " " +
                                  person?.lastName +
                                  " (" +
                                  person?.relationship +
                                  ") "
                                : ""}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active
                                  ? "text-neutral-white"
                                  : "text-primary-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
            <div className="pt-2">
              At least one witness is required for this transaction. Please note
              that Amcovad is also a witness of this transaction. Maximum of 10
              people
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
