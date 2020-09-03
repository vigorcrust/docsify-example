/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/docsify-edit-on-github@1.0.3/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t) {
  (t.EditOnGithubPlugin = {}),
    (t.EditOnGithubPlugin.create = function (n, i, e) {
      function u(t) {
        t = `
        <svg class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
        `
        return (header = [
          '<div style="overflow: auto">',
          '<p style="float: right"><a style="text-decoration: underline; cursor: pointer"',
          'onclick="EditOnGithubPlugin.onClick(event)">',
          t,
          "</a></p>",
          "</div>",
        ].join(""));
      }
      return (
        (e = e || "Edit on github"),
        (i = i || n.replace(/\/blob\//, "/edit/")),
        (t.EditOnGithubPlugin.editDoc = function (t, n) {
          var e = n.route.file;
          if (e) {
            var u = i + e;
            return window.open(u), t.preventDefault(), !1;
          }
          return !0;
        }),
        function (n, i) {
          if (
            ((t.EditOnGithubPlugin.onClick = function (t) {
              EditOnGithubPlugin.editDoc(t, i);
            }),
            (r = e) && "[object Function]" === {}.toString.call(r))
          )
            n.afterEach(function (t) {
              return u(e(i.route.file)) + t;
            });
          else {
            var o = u(e);
            n.afterEach(function (t) {
              return o + t;
            });
          }
          var r;
        }
      );
    });
})(window);
