import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = ( calendatEvent ) => {
    dispatch( onSetActiveEvent( calendatEvent ) )
  }

  const startSavingEvent = ( calendarEvent ) => {
    // TODO: llegar al backend 

    // todo
    if (calendarEvent._id) {
      // actualizacion
      dispatch( onUpdateEvent({ ...calendarEvent}) )
    }else{
      //creando 
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }

  }
  
  const startDeletingEvent = () => {
    dispatch( onDeleteEvent() )
  }



  return {
    //* propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  };
};
