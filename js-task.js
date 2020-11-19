'use strict';
const title = '==============================\n現在持っているタスクの一覧\n==============================';
let tasks = ['掃除', '買い物','散歩'];
let taskPush = function(job)  {
  return tasks.push(job);
}
console.log(title);
tasks.forEach(function(task) {
  console.log(tasks.indexOf(task),task);
});
let job = prompt('タスクを入力して下さい。');
while(job) {
  taskPush(job);
  tasks.forEach(function(task) {
    console.log(tasks.indexOf(task),task);
  });
  alert('新しいタスクを入力しました。');
  job = prompt('タスクを入力して下さい');
}