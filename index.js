
// Timers（経過しているかの判定）
// 100ms経ったときのループで実行される
setTimeout(()=>{
  console.log('setTimeout()');
},100);

// check
setImmediate(()=>{
  console.log('setImmediate()');
});

// nextTickQueue
process.nextTick(()=>{
  console.log('nextTick()');
});

// microTaskQueue
Promise.resolve().then(()=>{
  console.log('Promise.resolve().then()');
});