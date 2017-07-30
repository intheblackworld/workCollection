{# TODO:
   Jade email templates inherit a default base that's included with Keystone,
   the Swig templates need this to be ported across and bundled directly. #}

{% block body-contents %}
	{% if enquiry.title %}
	<p class="text-larger">信件標題:{{ enquiry.title }}</p>
	{% endif %}
	{% if enquiry.name.full or enquiry.email %}
		<p class="text-larger">從
			{% if enquiry.name.full %}
				<strong>{{ enquiry.name.full }}</strong>
			{% endif %}
			{% if enquiry.name.full and enquiry.email %}
				{% if enquiry.email %}(<a href="mailto:{{ enquiry.email }}">{{ enquiry.email }}</a>){% endif %}
			{% endif %}
		</p>
	{% endif %}
	{% if enquiry.phone %}
		<p class="text-larger">電話: {{ enquiry.phone }}</p>
	{% endif %}
	{% if enquiry.address %}
		<p class="text-larger">地址: {{ enquiry.address }}</p>
	{% endif %}
	{% if enquiry.enquiryType %}
		<p class="text-larger">{{ enquiry._.enquiryType.format() }}</p>
	{% endif %}
	{% if enquiry.message %}
		留言內容:{{ enquiry.message.html | replace('\n', '<br>') |safe }}
	{% endif %}
	<p class="text-muted">發送時間 {{ enquiry._.createdAt.format() }}</p>
	<p><a href="/keystone/enquiries/{{ enquiry.id }}">後台觀看留言</a></p>
{% endblock %}
