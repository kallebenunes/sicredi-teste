from ast import arg
import json
from django import template

register = template.Library()

@register.filter
def replace(string, char):
   
    return string.replace(char, '')
