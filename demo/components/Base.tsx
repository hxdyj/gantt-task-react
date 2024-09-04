import { range } from 'lodash';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from '../../src/index';

export function Base() {
  // let tasks: Task[] = range(1).map(item => {
  //   return {
  //     start: new Date(2020, 1, 1, 1, 1, 0, 0),
  //     end: new Date(2020, 1, 1, 1, 10, 0, 0),
  //     name: 'Idea' + item,
  //     id: 'Task' + item,
  //     type: 'task' + item,
  //     progress: 100,
  //     isDisabled: true,
  //     styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
  //   }
  // })

  let tasks: Task[] = [
    { "start": "2024-08-01T22:54:34.000Z", "end": "2024-08-01T23:06:34.000Z", "name": "机动侦察", "id": null, "type": "", "progress": 100, "isDisabled": true, "styles": { "progressColor": "#ffbb54", "progressSelectedColor": "#ff9e0d" } }, { "start": "2024-08-01T23:06:34.000Z", "end": "2024-08-01T23:54:34.000Z", "name": "持续侦察", "id": null, "type": "", "progress": 100, "isDisabled": true, "styles": { "progressColor": "#ffbb54", "progressSelectedColor": "#ff9e0d" } }]


  tasks.map(item => {
    item.start = new Date(item.start)
    item.end = new Date(item.end)
  })
  return (
    <div className="page-Base">
      <Gantt tasks={tasks} startDate={new Date("2024-08-01T22:54:34.000Z")} TooltipContent={() => null} viewMode={
        ViewMode.Hour
      } />
    </div>
  )
}
