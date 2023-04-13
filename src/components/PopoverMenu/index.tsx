import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { channel } from 'diagnostics_channel'
type Props = {
    children?: any,
    title?: string,
    butClassName?: string,
    Icon?: JSX.Element,
}

export function PopoverMenu({ children, Icon, title, butClassName }: Props) {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`
            ${open ? '' : 'text-opacity-90'} ${butClassName} flex px-5 items-center`}
                    >
                        {Icon}
                        {title}
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 min-w-max">
                            <div className="bg-white relative overflow-hidden  rounded-lg shadow-lg mt-3">
                                {children}
                            </div>
                        </Popover.Panel>
                    </Transition>

                </>
            )}
        </Popover>
    )
}

export default PopoverMenu
