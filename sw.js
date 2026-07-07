
self.addEventListener("push", function (e) {
  var data = {};
  try { data = e.data.json(); } catch (err) {}
  e.waitUntil(self.registration.showNotification(data.title || "Focus Log", {
    body: data.body || "What did you do the last 15 min?",
    icon: "./icon.png",
    badge: "./icon.png",
    tag: "focuslog-prompt",
    data: { url: "./" }
  }));
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) { if ("focus" in list[i]) return list[i].focus(); }
    return clients.openWindow("./");
  }));
});
