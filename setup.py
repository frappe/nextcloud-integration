# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in nextcloud_integration/__init__.py
from nextcloud_integration import __version__ as version

setup(
	name='nextcloud_integration',
	version=version,
	description='Frappe App for NextCloud Backup',
	author='Frappe',
	author_email='developers@frappe.io',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
