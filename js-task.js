'use strict';
const title = '==============================\n現在持っているタスクの一覧\n==============================';
const tasks = ['掃除', '買い物', '散歩'];
const taskPush = (job) => tasks.push(job);
console.log(title);
tasks.forEach((task, index) => console.log(index, task));
let job = prompt('タスクを入力して下さい。');
while(job) {
  taskPush(job);
  tasks.forEach((task, index) => console.log(index, task));
  alert('新しいタスクを入力しました。');
  job = prompt('タスクを入力して下さい');
}