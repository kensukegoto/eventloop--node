# イベントループ

## フェーズ

1. 処理開始
2. Timers
- global.setTimeout(callback,delay)
- global.setInterval(callback,delay)
3. pending callback
4. idle
5. poll
6. check
- global.setImmediate(callback)
7. close callbacks

## キュー

各フェーズの間に実行される。<br>
キューは溜まるものなので、実行されたらそのキューは消える<br>
各フェーズの間でキューが新しく出来ていないかのチェックがあり、<br>
あればキューが消費される。

- nextTickQueue
  - process.nextTick(callback)
- microTaskQueue
  - Promise.resolve().then(callback)

## テスト

下記の処理の実行順は？

```JS
setTimeout(()=>{
  console.log('setTimeout()');
},100);

setImmediate(()=>{
  console.log('setImmediate()');
});

process.nextTick(()=>{
  console.log('nextTick()');
});

Promise.resolve().then(()=>{
  console.log('Promise.resolve().then()');
});
```