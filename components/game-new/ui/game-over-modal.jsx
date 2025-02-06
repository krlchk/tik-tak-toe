import { UiButton, UiModal } from "../../uikit";

export function GameOverModal() {
  return (
    <UiModal
      width="md"
      isOpen={winnerSymbol}
      onClose={() => console.log("click")}
    >
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-md font-Inter font-normal">
          Победитель: <span className="text-teal-600">Paromovevg</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
