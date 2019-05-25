<script type="text/javascript">
	var alrt = function() {
		window.__profiler=window.__profiler||new __Profiler();
		window.__profiler.init();
		__profiler.scriptLoaded=true;
		__profiler.upload();
	};

	(function() {
		var jq = document.createElement('script');
		jq.type = 'text/javascript';
		jq.async = true;
		jq.onload = alrt;
		jq.src = '/src_unified.js'
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(jq, s);
	})();
</script>