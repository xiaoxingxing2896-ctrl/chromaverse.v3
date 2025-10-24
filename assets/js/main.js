document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('toggle-btn');
  const content = document.getElementById('content');

  // Toggle sidebar
  toggle.addEventListener('click', function () {
    // mobile: toggle visible class; desktop: collapse to small margin
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('visible');
    } else {
      const collapsed = content.classList.toggle('full');
      if (collapsed) {
        sidebar.classList.add('hidden');
      } else {
        sidebar.classList.remove('hidden');
      }
    }
  });

  // close sidebar on outside click (mobile)
  document.addEventListener('click', function (ev) {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(ev.target) && !toggle.contains(ev.target)) {
        sidebar.classList.remove('visible');
      }
    }
  });

  // Buy button placeholder action
  document.querySelectorAll('.buy-button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('这是预留的购买/支持接口。部署时请替换为真实支付链接或表单。');
    });
  });
});
