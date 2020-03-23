
console.log('我是public里的node.js')

//挑战6：ajax请求下一页
let n = 1;
getNextPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}

//挑战5： ajax加载json
getJSON.onclick = () => {
  //创建
  const request = new XMLHttpRequest()
  //调用
  request.open('GET', '/5.json')
  //监听
  request.onreadystatechange = () => {
    //下载完毕 且 200 <= 状态码 < 300 即下载成功 
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      console.log(request.response)
      const object = JSON.parse(request.response)
      console.log(object)
      myName.textContent = object.name
    }
  }
  //发送
  request.send()
}
//挑战4：ajax加载xml
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const xml = request.responseXML
        const text = xml.getElementsByTagName('warning')[0].textContent.trim()
        console.log(text)
      } else {
        window.alert('加载失败')
      }
    }
  }
  request.send()
}
//挑战3：ajax加载html
getHtml.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    //下载完成，但不知道是否下载成功
    if (request.readyState === 4) {
      //判断是否下载成功
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        //创建div
        const div = document.createElement('div')
        //填写div
        div.innerHTML = request.response
        //插入身体
        document.body.appendChild(div)
      } else {
        window.alert('加载失败')
      }
    }
  }
  // request.onerror = () => { }
  request.send()
}
//挑战2：ajax加载js
getJs.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    console.log(request.response)
    //创建 script
    const script = document.createElement('script')
    //填写 script
    script.innerHTML = request.response
    //插入 身体
    document.body.appendChild(script)
  }
  request.onerror = () => { }
  request.send()
}
//挑战1：ajax加载CSS 
getCss.onclick = () => {
  //创建
  const request = new XMLHttpRequest()
  //调用
  request.open('GET', '/1.css')
  //监听
  request.onload = () => {
    console.log(request.response)
    //创建style
    const style = document.createElement('style')
    //填入内容
    style.innerHTML = request.response
    //插到头里
    document.head.appendChild(style)
    console.log('请求成功')

  }
  request.onerror = () => {
    console.log('请求失败')
  }
  //发送
  request.send()
}
