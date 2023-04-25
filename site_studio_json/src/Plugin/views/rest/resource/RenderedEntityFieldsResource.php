<?php

namespace Drupal\my_custom_module\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 * Provides a REST resource for rendering entity fields as JSON.
 *
 * @RestResource(
 *   id = "rendered_entity_fields",
 *   label = @Translation("Rendered Entity Fields"),
 *   uri_paths = {
 *     "canonical" = "/your-json-path/{entity_type}/{entity_id}"
 *   }
 * )
 */
class RenderedEntityFieldsResource extends ResourceBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Constructs a Drupal\Component\Plugin\PluginBase object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, EntityTypeManagerInterface $entity_type_manager) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('entity_type.manager')
    );
  }

  /**
   * Responds to entity GET requests.
   *
   * @param string $entity_type
   *   The entity type.
   * @param string $entity_id
   *   The entity ID.
   *
   * @return \Drupal\rest\ResourceResponse
   *   The response containing the rendered entity fields as JSON.
   */
  public function get($entity_type, $entity_id) {
    $entity = $this->entityTypeManager->getStorage($entity_type)->load($entity_id);

    if (!$entity) {
      throw new NotFoundHttpException('Entity not found.');
    }

    $output = [];
    foreach ($entity->getFields() as $field_name => $field) {
      if (!$field->isEmpty()) {
        $field_value = $field->getValue();
        $output[$field_name] = count($field_value) === 1 ? $field_value[0] : $field_value;
      }
   
