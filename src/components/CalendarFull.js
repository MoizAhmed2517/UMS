import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction"
import {Paper, Box } from '@mui/material';

const editEventHandler = (selected) => {
  const title = prompt("Please Enter your event details:");
  const calendarAPI = selected.view.calendar;
  calendarAPI.unselect();

  if (title) {
    calendarAPI.addEvent({
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay
    });
  }
}

const handleEventClick = (selected) => {
  if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}' `)) {
    selected.event.remove();
  }
}


const CalendarFull = () => {
  return (
    <Paper sx={{padding: "5px"}} elevation={4}>
      <Box sx={{
        flex: '2',
        p: '10px',
      }}>
          <FullCalendar 
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={editEventHandler}
            eventClick={handleEventClick}
          />
      </Box>
    </Paper>
  )
}

export default CalendarFull