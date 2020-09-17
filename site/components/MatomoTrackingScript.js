const MatomoTrackingScript = () => (
  /* <!-- Matomo --> */
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://markmiro.matomo.cloud/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.src='//cdn.matomo.cloud/markmiro.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `,
    }}
  />
  /* <!-- End Matomo Code --> */
)

export default MatomoTrackingScript
