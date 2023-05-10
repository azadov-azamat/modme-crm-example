import { Eventcalendar, momentTimezone, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/react';
import moment from 'moment-timezone';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import React from "react";

// setup Mobiscroll Timezone plugin with Moment
momentTimezone.moment = moment;

export default function ScheduleComponent() {
    const myEvents = React.useMemo<MbscCalendarEvent[]>(() => {
        return [{
            start: '2023-05-08T07:00',
            end: '2023-05-08T09:00',
            title: 'Stakeholder mtg.',
            color: '#408cff'
        }, {
            start: '2023-05-09T18:00',
            end: '2023-05-09T19:30',
            title: 'Wrapup mtg.',
            color: '#ecbc72'
        }, {
            start: '2023-05-10T14:00',
            end: '2023-05-10T18:00',
            title: 'Business of Software Conference',
            color: '#ff6d42'
        }, {
            start: '2023-05-11T20:00',
            end: '2023-05-11T21:50',
            title: 'Product Team mtg.',
            color: '#913aa7'
        }, {
            start: '2023-05-12T13:00',
            end: '2023-05-12T15:00',
            title: 'Decision Making mtg.',
            color: '#5bb7c5'
        }, {
            start: '2023-05-13T13:00',
            end: '2023-05-13T14:00',
            title: 'Quick mtg. with Martin',
            color: '#fd002f'
        }, {
            start: '2023-05-14T12:00',
            end: '2023-05-14T16:00',
            color: '#50b166',
            title: 'Team-Building'
        }]
    }, []);

    const view = React.useMemo<MbscEventcalendarView>(() => {
        return {
            schedule: {
                type: 'week',
                timezones: [{
                    timezone: 'Asia/Tashkent',
                    label: 'Tashkent '
                }]
            }
        };
    }, []);

    return (
        <Eventcalendar
            theme="auto"
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            eventDelete={true}
            dataTimezone="utc"
            displayTimezone="Asia/Tashkent"
            timezonePlugin={momentTimezone}
            data={myEvents}
            view={view}
        />
    );
}