from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    template_name = 'index.html'
    # extra_context={'name': 'Sonserina'}

# class IndexView(TemplateView):
#     # navigation = {
#     #     "Acesso Rápido ": [
#     #             "Localizar Agência",
#     #             "Fale conosco"
#     #         ],
#     #         "Para Você": [
#     #             "Politica de privacidade",
#     #             "2ª via de boleto"
#     #         ]
#     #     }
    
#     template_name = "index.html"

#     print("Call function indexView")

    def get_context_data(self, *args, **kwargs):
        context = super(IndexView, self).get_context_data(*args, **kwargs)
        
        print(context)
        
        context = {
            'name': 'Tá usando o menu'
        }

        return context
