from django.db import models

# Create your models here.


class Item(models.Model): 
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    name_extension = models.CharField(max_length=100, null=True)
    contact_num= models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=150, null=True)
    address = models.CharField(max_length=150, null=True)
    zip_code = models.CharField(max_length=100, null=True)
    birthday = models.CharField(max_length=150, null=True)
    birthplace = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    height = models.CharField(max_length=100, null=True)
    weight = models.CharField(max_length=100, null=True)
    gsis_id_no = models.CharField(max_length=150, null=True)
    pagibig_id_no = models.CharField(max_length=150, null=True)
    philhealth_no = models.CharField(max_length=150, null=True)
    sss_no = models.CharField(max_length=150, null=True)
    tin_no = models.CharField(max_length=150, null=True)
    elementary = models.CharField(max_length=100, null=True)
    year_graduated1 = models.CharField(max_length=100, null=True)
    high_school = models.CharField(max_length=100, null=True)
    year_graduated2 = models.CharField(max_length=100, null=True)
    college = models.CharField(max_length=100, null=True)
    year_graduated3 = models.CharField(max_length=100, null=True)
    

    def __str__(self) -> str:
        return super().__str__()