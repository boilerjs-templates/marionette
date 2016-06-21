<div style="position:fixed;width:100%;z-index:9999;top:0;left:0;height:100%;background:#ffffff;opacity:.80;"></div>

<div style="position:fixed;width:100%;z-index:9999;top:33.33%;" class="text-center">
	<span class="glyphicon glyphicon-exclamation-sign text-danger" style="font-size:30px"></span>
	<p style="margin-top:10px;">
		<strong class="text-muted">
		{{#if responseJSON}}
			<pre>{{responseJSON.errorMessage}}</pre>
		{{else}}
			Error!
		{{/if}}
		</strong>
	</p>
	<button type="button" class="btn btn-warning btn-close" style="width:150px;">Close</button>
</div>