{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
		<div class="jumbotron">
			<img src="/images/logo.svg" width="160">
			<h1>Welcome</h1>
			<hr>
			{% if user and user.canAccessKeystone %}
				<p>
					<a href="/keystone" class="btn btn-lg btn-primary">Open the Admin UI</a>
				</p>
			{% else %}
				<p>We have created a default Admin user for you with the email</p>
				<p>
					<a href="/keystone/signin" style="margin-right: 10px" class="btn btn-lg btn-primary">Sign in</a>
					to use the Admin UI.
				</p>
			{% endif %}
			<hr>

		</div>
	</div>
{% endblock %}
