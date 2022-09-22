from tempfile import template
from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super(IndexView, self).get_context_data(*args, **kwargs)
        context = {
            'navigation': {
                'Acesso Rápido': ['Localizar Agência', 'Fale Conosco'],
                'Para Você': ['2ª via de boleto', 'Política de Privacidade']
            },
            'aside_items': [
                {
                    'item': 'Conta Corrent',
                    'badge': '',
                    "href": '/'
                },
                {
                    'item': 'Cartôes ',
                    'badge': '',
                    "href": '/'
                },
                {
                    'item': 'Pix ',
                    'badge': 'Novo',
                    "href": '/'                },
                {
                    'item': 'Crédito',
                    'badge': 'Novo',
                    "href": '/'
                },
            ]
        }

        return context
