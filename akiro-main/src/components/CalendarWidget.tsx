import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const today = currentDate.getDate();

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

// Mock events
const events = {
  [today]: ['Physics Quiz'],
  [today + 2]: ['Math Assignment Due'],
  [today + 5]: ['Chemistry Lab'],
  [today + 7]: ['Economics Test']
};

export const CalendarWidget: React.FC = () => {
  const renderCalendarDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today;
      const hasEvent = events[day];
      
      days.push(
        <div
          key={day}
          className={`
            h-8 flex items-center justify-center text-sm rounded cursor-pointer
            ${isToday 
              ? 'bg-primary text-primary-foreground font-semibold' 
              : hasEvent 
                ? 'bg-accent/20 text-accent-foreground font-medium hover:bg-accent/30' 
                : 'hover:bg-muted'
            }
          `}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="space-y-4">
      {/* Calendar */}
      <Card className="card-elevated">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h3 className="font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <Button variant="ghost" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendarDays()}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="card-elevated">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.entries(events)
            .filter(([day]) => parseInt(day) >= today)
            .slice(0, 4)
            .map(([day, eventList]) => (
              <div key={day} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">{eventList[0]}</p>
                  <p className="text-xs text-muted-foreground">
                    {monthNames[currentMonth]} {day}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {parseInt(day) === today ? 'Today' : 
                   parseInt(day) === today + 1 ? 'Tomorrow' : 
                   `${parseInt(day) - today} days`}
                </Badge>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
};