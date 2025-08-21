'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { buttonVariants } from '@/components/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const MonthMapping = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AUG',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DEC',
}

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'border rounded-xl [border-image:linear-gradient(to_right,#F1DC83,#BD8100,#FFF5A8,#BD8100,#FFF5A8,#BD8100,#FFF5A8)_1]',
        className
      )}
      classNames={{
        month: 'space-y-4 font-noto-sans',
        // border border-[#E0C977] rounded-xl
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-y-0 relative',
        month_caption:
          'relative flex justify-left items-center px-8 py-4 text-[#221F1F] text-xl font-semibold border border-[#E0C977] rounded-lg bg-gradient-selection',
        month_grid: 'w-full border-collapse space-y-1',
        caption_label: 'hidden',
        dropdown_root: 'absolute right-[32px]',
        dropdown:
          'flex justify-center items-center border border-[#221F1F] rounded-lg bg-transparent px-3 appearance-none',
        nav: 'flex items-center py-4 justify-between absolute inset-x-0',
        button_previous: cn(
          buttonVariants({ variant: 'calendar' }),
          'h-7 w-7 bg-transparent p-0 z-10'
        ),
        button_next: cn(
          buttonVariants({ variant: 'calendar' }),
          'h-7 w-7 bg-transparent p-0 z-10'
        ),
        weeks: 'w-full border-collapse space-y-2',
        weekdays: 'flex space-x-2',
        weekday: 'text-[#E0C977] font-normal rounded-md w-9 text-[.9rem]',
        week: 'flex w-full mt-2 space-x-2',
        day_button:
          'h-9 w-9 text-center text-[.9rem] p-0 relative [&:has([aria-selected])]:bg-[#E0C977] focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-[#E0C977] bg-transparent hover:bg-gradient-radial hover:text-[#221F1F] rounded-full'
        ),
        selected:
          'bg-gradient-radial text-[#212F1F] hover:bg-gradient-radial hover:text-[#221F1F] focus:bg-gradient-radial focus:text-[#221F1F] aria-selected:bg-gradient-radial aria-selected:text-[#212F1F]',
        outside:
          'day-outside opacity-50 aria-selected:bg-gradient-radial aira-selected:text-[#212F1F] aria-selected:opacity-30',
        disabled: 'text-muted-foreground opacity-50',
        range_end: 'day-range-end',
        range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        hidden: 'invisible',
        ...classNames,
      }}
      formatters={{
        formatMonthDropdown(monthNumber) {
          return (monthNumber + 1)
            .toString()
            .concat('月')
            .concat(MonthMapping[monthNumber as keyof typeof MonthMapping])
        },
        formatWeekdayName(weekday, options) {
          return format(weekday, 'ccccc', options)
        },
      }}
      components={{
        Chevron: ({ ...props }) =>
          props.orientation === 'left' ? (
            <ChevronLeft {...props} className='h-5 w-5 stroke-[#221F1F]' />
          ) : (
            <ChevronRight {...props} className='h-5 w-5 stroke-[#221F1F]' />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
