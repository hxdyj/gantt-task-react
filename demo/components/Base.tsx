import { range } from 'lodash';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from '../../src/index';

export function Base() {
  let tasks: Task[] = range(10).map(item => {
    return {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: 'Idea' + item,
      id: 'Task' + item,
      type: 'task' + item,
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    }
  })
  return (
    <div className="page-Base">
      <Gantt tasks={tasks} startDate={new Date(2020, 1, 1)} viewMode={
        ViewMode.Hour
      } />
    </div>
  )
}
