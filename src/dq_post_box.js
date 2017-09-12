if (window.dq_post_box_loaded !== true) {
  window.addEventListener('message', function (event) {
    console.log('message')
    if (event.data.type === 'dq_request_setup') {
      document.getElementsByName('dq_editor').forEach(function (element) {
        element.style.border = 'none'
        element.contentWindow.postMessage({
          type: 'dq_setup',
          dom: element.innerHTML,
        }, '*')
      })
    }
  }, false)
  window.dq_post_box_loaded = true
}
