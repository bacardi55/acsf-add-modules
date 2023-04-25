<?php

namespace Drupal\my_custom_module\Plugin\views\row;

use Drupal\views\Plugin\views\row\RowPluginBase;
use Drupal\Core\Entity\EntityInterface;

/**
 * Renders an entity with its fields as JSON.
 *
 * @ingroup views_row_plugins
 *
 * @ViewsRow(
 *   id = "rendered_entity_fields_as_json",
 *   title = @Translation("Rendered Entity Fields as JSON"),
 *   help = @Translation("Render entity fields as JSON."),
 *   display_types = {"data"}
 * )
 */
class RenderedEntityFieldsAsJsonRow extends RowPluginBase {

  /**
   * {@inheritdoc}
   */
  public function render($row) {
    $entity = $this->getEntity($row);
    if ($entity instanceof EntityInterface) {
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
