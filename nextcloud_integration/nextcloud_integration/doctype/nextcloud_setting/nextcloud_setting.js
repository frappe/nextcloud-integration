// Copyright (c) 2020, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Nextcloud Setting', {

	refresh: function(frm) {
		frm.clear_custom_buttons();
		frm.events.add_backup_button(frm);
	},

	enabled: function(frm) {
		frm.refresh();
	},

	add_backup_button: function(frm) {
		if (frm.doc.enabled && frm.doc.nextcloud_username && frm.doc.password) {
			frm.add_custom_button(__("Backup Now"), function() {
				frappe.call({
					method: "nextcloud_integration.nextcloud_integration.doctype.nextcloud_setting.nextcloud_setting.take_backup",
					freeze: true
				});
			}).addClass("btn-primary");
		}
	}
});