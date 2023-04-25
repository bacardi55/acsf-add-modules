<?php

namespace Drupal\my_custom_module\Plugin\views\field;

use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * Field handler to output rendered entity fields as structured JSON.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("rendered_entity_fields_as_json")
 */
class RenderedEntityFieldsAsJson extends FieldPluginBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Do not query anything, as we'll get the data from the rendered entity.
  }

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $entity = $values->_entity;
    if ($entity) {
      $output = [];
      foreach ($entity->getFields() as $field_name => $field) {
        if (!$field->isEmpty()) {
          $field_value = $field->getValue();
          $output[$field_name] = count($field_value) === 1 ? $field_value[0] : $field_value;
        }
      }
      return json_encode($output, JSON_PRETTY_PRINT);
    }
    return '';
  }

}
